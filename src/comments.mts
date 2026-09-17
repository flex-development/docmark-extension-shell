/**
 * @file comments
 * @module docmark-extension-shell/comments
 */

import { hashbang } from '@flex-development/docmark-extension-hashbang'
import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import comment from './comment.mts'

/**
 * The shell comments syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  source: { [codes.numberSign]: [hashbang, comment] }
}

export default comments
