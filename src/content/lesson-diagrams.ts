import type { ActorId } from './types';

type Base = { title: string; note: string; refs: string[] };
export type LessonDiagramSpec =
  | (Base & { kind: 'curves'; xLabel: string; yLabel: string; xMax: number; yMax: number;
      curves: { label: string; color?: ActorId; points: [number, number][]; explain: string }[];
      markers?: { x: number; y: number; label: string }[]; initial?: number; focus?: string })
  | (Base & { kind: 'matrix'; rowPlayer: string; colPlayer: string; rows: string[]; columns: string[]; payoffs: [number, number][][] })
  | (Base & { kind: 'bars'; unit: string; items: { label: string; value: number; color?: ActorId; explain: string }[] })
  | (Base & { kind: 'sequence'; steps: { actor: string; action: string; consequence: string }[] });
