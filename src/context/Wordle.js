import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getStatus } from '../utils'
import WORDS from '../words.json';

export const WordleContext = createContext({
    solution: ''
});

export const useWordle = () => useContext(WordleContext);

export const WordleProvider = (props) => {
    const [searchParams] = useSearchParams()
    const level = Math.min(Math.max(+searchParams.get('level') || 0, 0), 2)
    const length = 5 + level
    const total = 7 - level

    const [solution, setSolution] = useState('')
    const [count, setCount] = useState(0)
    const [guesses, setGuesses] = useState(Array(total).fill('').map(() => []))
    const initStatus = () => {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, cur) => {
            acc[cur] = 0
            return acc
        }, {})
    }
    const [status, setStatus] = useState(initStatus)
    const [playStatus, setPlayStatus] = useState(0)
    const [alert, setAlert] = useState({ type: '', content: '' })

    const onSubmit = () => {
        if (playStatus) return
        setAlert({ type: '', content: '' })
        if (count < total && guesses[count].length === length) {
            const newStatus = getStatus(guesses[count], solution.split(''))
            setStatus({ ...status, ...newStatus })
            if (guesses[count].join('') === solution) {
                setPlayStatus(1)
                setAlert({
                    type: 'success',
                    content: 'Congratulations！Do you want to play again？'
                })
            } else if (count === total - 1) {
                setPlayStatus(2)
                setAlert({
                    type: 'danger',
                    content: `Failed！The correct answer is ${solution}`
                })
            }
            setCount(count + 1)
        } else if (guesses[count].length < length) {
            setAlert({
                type: 'warning',
                content: 'Not enough letters'
            })
        }
    }

    const onInput = (key) => {
        if (playStatus) return
        if (key) {
            if (count < total && guesses[count].length < length) {
                guesses[count].push(key)
                setGuesses([...guesses])
            }
        } else {
            if (count < total && guesses[count].length > 0) {
                guesses[count].pop()
                setGuesses([...guesses])
            }
        }
    }

    const [restart, setRestart] = useState(false)
    useEffect(() => {
        setRestart(true)
    }, [level, total])
    useEffect(() => {
        if (restart) {
            setSolution(WORDS[level][Math.floor(Math.random() * WORDS[level].length)].toUpperCase())
            setCount(0)
            setGuesses(Array(total).fill('').map(() => []))
            setStatus(initStatus())
            setPlayStatus(0)
            setAlert({ type: '', content: '' })
            setRestart(false)
        }
    }, [level, total, restart])

    return (
        <WordleContext.Provider value={{ solution, guesses, status, count, total, length, alert, onSubmit, onInput, setRestart }} {...props} />
    );
};
