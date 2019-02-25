/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable } from 'inversify';
import * as che from '@eclipse-che/plugin';

/**
 * Contributes the path for current project as a relative path to the first directory under the root workspace.
 */
@injectable()
export class ProjectPathVariableResolver {

    registerVariables() {
        che.variables.registerVariable({
            name: 'current.project.path',
            description: 'The path of the project root folder',
            resolve: async () => {
                // TODO https://github.com/theia-ide/theia/issues/4043
                throw new Error('Project path variable resolving currently is not supported.');
            },
            isResolved: false //todo implement
        });
    }
}
