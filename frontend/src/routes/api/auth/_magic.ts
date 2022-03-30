import { variables } from "$lib/variables";
import { Magic } from "@magic-sdk/admin";

const MAGIC_SECRET_KEY = variables.magicSecretKey;

export const magic = new Magic(MAGIC_SECRET_KEY);
