"use client";
import { useState } from "react";

const IMAGE_COUNT = 41;
const IMAGE_STEPS = 2;
const IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => IMAGE_COUNT - i);

export default function Page() {
  const [loaded, setLoaded] = useState<number>(0);

  return (
    <div className="h-full w-full p-3 flex flex-col gap-3">
      <h1 className="text-white">Kart (August 2024 - October 2025)</h1>
      <ul className="list-disc list-inside flex flex-col gap-1 pb-3">
        <ListItem>
          engine: Honda GX 390 - 1 cylinder 4 stroke 390cm² engine - limiter
          delete up to 5300 rpm
        </ListItem>
        <ListItem>
          gear ratio 53:10 - high torque with admirable top speed of about
          80km/h
        </ListItem>
        <ListItem>
          almost 100% sturdy stainless steel frame - total weight of about
          100kgs
        </ListItem>
        <ListItem>
          dimensions: length (without bumper): 135cm - wheel base front: 40cm /
          rear: 75cm
        </ListItem>
        <ListItem>wheels front: 40cm - rear: 47cm</ListItem>
        <ListItem>
          rear axle: 50mm outer diameter with wall thickness of 9mm - final
          mount on both sides; first center mount could not take the terrain
        </ListItem>
        <ListItem>100w LED matrix headlight - like the a north star</ListItem>
        <ListItem>
          safety first - front pedal disc brakes; rear axle disc hand-break
        </ListItem>
        <ListItem>
          everything on this absolute unit is like v3 because the scope kept
          climbing 🥲
        </ListItem>
      </ul>
      {IMAGES.slice(
        0,
        Math.min(
          Math.ceil((loaded + 0.5) / IMAGE_STEPS) * IMAGE_STEPS,
          IMAGE_COUNT
        )
      ).map((image) => (
        <img
          key={image}
          src={`/assets/engineering/kart/kart-${image}.webp`}
          className="w-full"
          alt=""
          onLoad={() => setLoaded((loaded) => loaded + 1)}
        />
      ))}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex flex-row gap-2">
      <div className="m-2 size-1.5 bg-primary opacity-80" />
      <span>{children}</span>
    </li>
  );
}
