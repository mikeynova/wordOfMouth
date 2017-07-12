import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultIsVisible={false}
    >
    <LogMonitor theme="nicinabox"/>
    <DiffMonitor theme="nicinabox"/>
    <ChartMonitor theme="nicinabox"/>
  </DockMonitor>
)