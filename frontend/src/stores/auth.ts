// import { Magic } from "magic-sdk";
import type { Locals } from '$lib/interfaces';
import { writable, type Writable } from 'svelte/store';

export const magicStore: Writable<Locals> = writable(null);
