import React from 'react'
import { RedirectToLogin } from '@pga/auth-provider'

const dashboardUrl = window.location.origin + '/dashboard'

export default () => <RedirectToLogin returnTo={dashboardUrl} />
