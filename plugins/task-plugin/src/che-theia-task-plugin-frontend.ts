/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as che from '@eclipse-che/plugin';
import "reflect-metadata";
import { CHE_TASK_TYPE } from './task-protocol';
import { CheTaskProvider } from './che-task-provider';
import { container } from './che-task-frontend-module';
import { CheTaskRunner } from './che-task-runner';
import { ServerVariableResolver } from './variable/server-variable-resolver';
import { ProjectPathVariableResolver } from './variable/project-path-variable-resolver';
import { CheTaskEventsHandler } from './preview/task-events-handler';
import { TasksPreviewManager } from './preview/tasks-preview-manager';

let pluginContext: theia.PluginContext;

export function start(context: theia.PluginContext) {
    pluginContext = context;

    const сheTaskEventsHandler = container.get<CheTaskEventsHandler>(CheTaskEventsHandler);
    сheTaskEventsHandler.init();

    const tasksPreviewManager = container.get<TasksPreviewManager>(TasksPreviewManager);
    tasksPreviewManager.init();

    const serverVariableResolver = container.get<ServerVariableResolver>(ServerVariableResolver);
    serverVariableResolver.registerVariables();

    const projectPathVariableResolver = container.get<ProjectPathVariableResolver>(ProjectPathVariableResolver);
    projectPathVariableResolver.registerVariables();

    const cheTaskProvider = container.get<CheTaskProvider>(CheTaskProvider);
    theia.tasks.registerTaskProvider(CHE_TASK_TYPE, cheTaskProvider);

    const cheTaskRunner = container.get<CheTaskRunner>(CheTaskRunner);
    che.task.registerTaskRunner(CHE_TASK_TYPE, cheTaskRunner);
}

export function stop() { }

export function getContext(): theia.PluginContext {
    return pluginContext;
}
