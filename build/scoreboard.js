import { world } from '@minecraft/server';

export const setValue = ( target, key, value ) => {
  try {
    let objective = world.scoreboard.getObjective(key);
    if (!objective) {
      objective = world.scoreboard.addObjective(key, '');
    }
    
    let identity = target.scoreboardIdentity;
    
    if (identity === undefined) {
      target.runCommand(`scoreboard players set @s ${key} ${value}`);
    } else {
      objective.setScore(identity, value);
    }
  } catch (error) {
    console.error(error);
  }
}
export const addValue = ( target, key, value ) => {
  try {
    let objective = world.scoreboard.getObjective(key);
    if (!objective) {
      objective = world.scoreboard.addObjective(key, '');
    }
    
    let identity = target.scoreboardIdentity;
    
    if (identity === undefined) {
      target.runCommand(`scoreboard players add @s ${key} ${value}`);
    } else {
      objective.addScore(identity, value);
    }
  } catch (error) {
    console.error(error);
  }
}
export const subValue = ( target, key, value ) => {
  try {
    let objective = world.scoreboard.getObjective(key);
    if (!objective) {
      objective = world.scoreboard.addObjective(key, '');
    }
    
    let identity = target.scoreboardIdentity;
    
    if (identity === undefined) {
      target.runCommand(`scoreboard players remove @s ${key} ${value}`);
    } else {
      objective.addScore(identity, -value);
    }
  } catch (error) {
    console.error(error);
  }
}
export const randomValue = ( target, key, min = 0, max = 1 ) => {
  if (min > max) throw new RangeError('Invalid range: min should be less than or equal to max');
  try {
    let objective = world.scoreboard.getObjective(key);
    if (!objective) {
      objective = world.scoreboard.addObjective(key, '');
    }
    
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let identity = target.scoreboardIdentity;
    
    if (identity === undefined) {
      target.runCommand(`scoreboard players set @s ${key} ${value}`);
    } else {
      objective.setScore(identity, value);
    }
  } catch (error) {
    console.error(error);
  }
}
export const getValue = ( target, key ) => {
  try {
    const objective = world.scoreboard.getObjective(key);
    if (!objective) return 0;
    
    const identity = target.scoreboardIdentity;
    
    if (identity === undefined) return 0;
    
    return objective.getScore(identity) ?? 0;
  } catch (error) {
    console.error(error);
  }
}

export const kick = ( target, key ) => {
  try {
    const objective = world.scoreboard.getObjective(key);
    if (!objective) return;
    
    const identity = target.scoreboardIdentity;
    
    if (!identity) return;
    
    if(objective.getScore(identity)) {
      objective.removeParticipant(identity);
    }
  } catch (error) {
    console.error(error);
  }
}

const Scoreboard = {
  setValue, addValue, subValue, randomValue, getValue, kick,
};

export default Scoreboard;
