function n(t,c){const o=Math.max(0,Math.floor(c.specialPotency)),a=Math.max(1,t.potencyPerJump);return Math.max(0,t.jumps+Math.floor(o/a)+Math.max(0,c.chainJumps))}function e(t,c){const o=Math.max(0,Math.floor(c.specialPotency));return t.shieldPct+Math.max(0,c.frostShieldPct)+o*t.potencyShieldPct}export{n as c,e as f};

