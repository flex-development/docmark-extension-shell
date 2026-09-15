/**
 * @file comment
 * @module docmark-extension-shell/comment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes, lang, tt } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct,
  NamedConstruct
} from '@flex-development/docmark-util-types'

/**
 * The shell comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @const {ContinuableConstruct & NamedConstruct} comment
 */
const comment: ContinuableConstruct & NamedConstruct = factoryLineComment({
  construct: { name: `${tt.comment}:${lang.shell}` },
  fields: { lang: lang.shell },
  markers: { code: codes.numberSign }
})

export default comment
