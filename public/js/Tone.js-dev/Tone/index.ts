export { getContext, setContext } from "./core/Global";
export * from "./classes";
export * from "./version";
import { getContext } from "./core/Global";
import { ToneAudioBuffer } from "./core/context/ToneAudioBuffer";
export { start } from "./core/Global";
import { Seconds } from "./core/type/Units";

/**
 * The current audio context time of the global [[Context]]. 
 * See [[Context.now]]
 * @category Core
 */
export const now: () => Seconds = getContext().now.bind(getContext());

/**
 * The current audio context time of the global [[Context]] without the [[Context.lookAhead]]
 * See [[Context.immediate]]
 * @category Core
 */
export const immediate: () => Seconds = getContext().immediate.bind(getContext());

/**
 * The Transport object belonging to the global Tone.js Context.
 * See [[Transport]]
 * @category Core
 */
export const Transport = getContext().transport;

/**
 * The Destination (output) belonging to the global Tone.js Context.
 * See [[Destination]]
 * @category Core
 */
export const Destination = getContext().destination;

/**
 * The [[Listener]] belonging to the global Tone.js Context.
 * @category Core
 */
export const Listener = getContext().listener;

/**
 * Draw is used to synchronize the draw frame with the Transport's callbacks. 
 * See [[Draw]]
 * @category Core
 */
export const Draw = getContext().draw;

/**
 * A reference to the global context
 * See [[Context]]
 * @category Core
 */
export const context = getContext();

/**
 * Promise which resolves when all of the loading promises are resolved. 
 * Alias for static [[ToneAudioBuffer.loaded]] method.
 * @category Core
 */
export const loaded = ToneAudioBuffer.loaded.bind(ToneAudioBuffer);

// this fills in name changes from 13.x to 14.x
import { ToneAudioBuffers } from "./core/context/ToneAudioBuffers";
import { ToneBufferSource } from "./source/buffer/ToneBufferSource";
export const Buffer: typeof ToneAudioBuffer = ToneAudioBuffer;
export const Buffers: typeof ToneAudioBuffers = ToneAudioBuffers;
export const BufferSource: typeof ToneBufferSource = ToneBufferSource;
