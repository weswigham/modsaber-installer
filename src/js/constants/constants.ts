import { IWindow } from '../..'
import { getCurrentWindow } from '../utils/electron'

// Remote URLs
export const BASE_URL = (getCurrentWindow() as IWindow).custom.BASE_URL

// Auto Update Job
export const AUTO_UPDATE_JOB = (getCurrentWindow() as IWindow).custom
  .AUTO_UPDATE_JOB
