/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tone from 'Tone/core/Tone'
import 'style/supported.scss'

export class Supported {
	constructor(){
		if (!this.works){
			const overlay = document.createElement('div')
			overlay.id = 'unsupported'
			document.body.appendChild(overlay)

			const text = document.createElement('div')
			text.id = 'text'
			text.innerHTML = `Oops, sorry for the tech trouble. <br>For the best experience, view in <a href="https://www.google.com/chrome" target="_blank">Chrome browser</a>.`
			overlay.appendChild(text)
		}
	}

	get works(){
		return Tone.supported
	}
}