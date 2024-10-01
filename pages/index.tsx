import KenoGamePlay from "@/components/game-display"; 
import { KenoPlayManagerProvider } from "@/contexts/game-managers/KenoPlayManagerContext";
import React from "react";

function KenoGameDisplay() { 
  return ( 
          <KenoPlayManagerProvider>
      <KenoGamePlay />
            
      </KenoPlayManagerProvider> 
  );
} 

export default KenoGameDisplay;
