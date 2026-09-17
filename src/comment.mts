/**
 * @file comment
 * @module docmark-extension-shell/comment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes, lang } from '@flex-development/docmark-util-symbol'
import type { ContinuableConstruct } from '@flex-development/docmark-util-types'

/**
 * The shell comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} comment
 */
const comment: ContinuableConstruct = factoryLineComment({
  fields: { lang: lang.shell },
  markers: { code: codes.numberSign }
})

export default comment
