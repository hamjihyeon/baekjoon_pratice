function solution(bandage, health, attacks) {
    let lastAttack = 0;
    const maxHealth = health;
    const [t, x, y] = bandage;
    
    for (const [attackTime, damage] of attacks) {
        const time = attackTime - lastAttack - 1;
        const heal = time * x + Math.floor(time / t) * y;
        
        health = Math.min(health + heal, maxHealth)
        health -= damage;
        if (health <= 0) {
            return -1;
        }
        lastAttack = attackTime;
    }
    return health;
}