import {createContext, useState} from 'react';
import {Redirect} from "react-router-dom";

export const heroContext = createContext()
const {Provider} = heroContext

export const ProviderHero = ({children}) => {

    const [equipoUno, setEquipoUno] = useState([]);
    const [stats, setStats] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    });
    const [bestStat, setBestStat] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);


    function nueva(stat, state_name) {
        if (!stat && !state_name) {
            return
        }
        equipoUno.map(item => {
            stat.push(Number(item.powerstats[`${state_name}`]))
        })
        setStats(prevStat => {
            return {...prevStat, [state_name]: stat.reduce((prev, next) => prev + next)}
        })
    }


    function getBestStat() {
        let max = {
            value: 0,
            name: ""
        }
        Object.keys(stats).forEach(stat_nombre => {
            if (stats[stat_nombre] > max.value) {
                max = {
                    value: stats[stat_nombre],
                    name: stat_nombre
                }
                setBestStat(max.name)
            } else if (stats[stat_nombre] === max.value) {
                setBestStat("No hay mejor superpoder")
            }
        })
    }

    function getAvgHeightWeight(height, weight) {
        equipoUno.map(item => {
            height.push(Number(item.appearance.height[1].slice(0, -2)))
        })
        equipoUno.map(item => {
            weight.push(Number(item.appearance.weight[1].slice(0, -2)))
        })
        setWeight(weight.reduce((prev, next) => prev + next))
        setHeight(height.reduce((prev, next) => prev + next))


    }

    function IsPar(value) {
        return value % 2 === 0;
    }


    function handleShow(flag) {
        setCounter(counter + 1)
        if (flag && IsPar(counter)) {
            setShow(true)
        } else {
            setShow(false)
        }
    }


    function isLoggedIn() {
        if (!localStorage.getItem("token")) {
            console.log("xdd")
            return (
                <Redirect to={'/login'}/>
            )
        }
    }

    const valueContext = {
        equipoUno,
        setEquipoUno,
        stats,
        setStats,
        nueva,
        bestStat,
        getBestStat,
        getAvgHeightWeight,
        height, weight,
        isLoggedIn,
        handleShow,
        show,

    }

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    );
}


export default heroContext;