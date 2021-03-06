// Copyright 2018 Red Hat, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

let errorId = 0

export const addError = error => ({
  type: ADD_ERROR,
  id: errorId++,
  error
})

export const addApiError = error => {
  const d = {
    url: error.request.responseURL || error.url
  }
  if (error.response) {
    d.text = error.response.statusText
    d.status = error.response.status
  } else {
    d.status = 'Unable to fetch URL, check your network connectivity, browser plugins, and ad-blockers'
    d.text = error.message
  }
  return addError(d)
}

export const clearError = id => ({
  type: CLEAR_ERROR,
  id
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})
