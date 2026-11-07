import { ref } from 'vue'

export type CourseProjectId = 'sir' | 'reaction-time'

export interface CourseProject {
  id: CourseProjectId
  name: string
  summary: string
  placeholder?: boolean
}

export const PROJECTS: CourseProject[] = [
  {
    id: 'sir',
    name: 'SIR Epidemic Simulator',
    summary: 'Epidemic modelling with a deterministic discrete-time SIR simulator.',
  },
  {
    id: 'reaction-time',
    name: 'Reaction Time Lab',
    summary: 'Experimental Psychology variant. Practical materials are not available yet.',
    placeholder: true,
  },
]

export const DEFAULT_PROJECT: CourseProjectId = 'sir'
export const PROJECT_STORAGE_KEY = 'oxrse.softeng-ai.course-project'

function isCourseProjectId(value: unknown): value is CourseProjectId {
  return PROJECTS.some(project => project.id === value)
}

function readStoredProject(): CourseProjectId {
  if (typeof window === 'undefined')
    return DEFAULT_PROJECT

  try {
    const stored = window.localStorage.getItem(PROJECT_STORAGE_KEY)
    return isCourseProjectId(stored) ? stored : DEFAULT_PROJECT
  }
  catch {
    return DEFAULT_PROJECT
  }
}

// A module-level ref is shared by every slide and component that imports it.
export const activeProject = ref<CourseProjectId>(readStoredProject())

export function setProject(project: string) {
  if (!isCourseProjectId(project))
    return

  activeProject.value = project

  if (typeof window === 'undefined')
    return

  try {
    window.localStorage.setItem(PROJECT_STORAGE_KEY, project)
  }
  catch {
    // Storage can be unavailable (private browsing or blocked storage).
    // The in-memory selection still works for the current session.
  }
}
