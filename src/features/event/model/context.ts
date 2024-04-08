'use client';

import { createContext } from "react";
import { IEventContext } from "./types";

export const CreateEventContext = createContext<IEventContext>(null!)