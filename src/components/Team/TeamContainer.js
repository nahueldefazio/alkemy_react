import React, {useContext, useEffect} from 'react';
import heroContext from "../context/heroContext";
import Team from "./Team";


function TeamContainer() {
    const {
        getBestStat,
        bestStat,
        getAvgHeightWeight,
        height,
        weight,
        isLoggedIn,
        nueva,
        stats

    } = useContext(heroContext)


    const heroIntelligence = [0]
    const heroStrength = [0]
    const heroSpeed = [0]
    const heroDurability = [0]
    const heroPower = [0]
    const heroCombat = [0]
    const heightArr = [0]
    const weightArr = [0]


    useEffect(() => {

        nueva(heroIntelligence, "intelligence")
        nueva(heroCombat, "combat")
        nueva(heroDurability, "durability")
        nueva(heroPower, "power")
        nueva(heroSpeed, "speed")
        nueva(heroStrength, "strength")

        getBestStat()

        getAvgHeightWeight(heightArr, weightArr)

    }, [bestStat, stats.intelligence, stats.strength, stats.speed, stats.power, stats.combat, stats.durability]);


    return (
        <div  className={'fondo-team'}>
            {isLoggedIn()}
            <Team intelligence={stats.intelligence}
                  strength={stats.strength}
                  speed={stats.speed}
                  power={stats.power}
                  combat={stats.combat}
                  durability={stats.durability}
                  bestStat={bestStat}
                  weigth={weight}
                  height={height}/>
        </div>
    );
}

export default TeamContainer;