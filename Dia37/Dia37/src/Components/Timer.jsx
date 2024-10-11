import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // Função para formatar o tempo
    const formatTime = (unit) => (unit < 10 ? '0' + unit : unit);

    // Função para atualizar o temporizador
    const updateTime = () => {
        setTime((prevTime) => {
            let { hours, minutes, seconds } = prevTime;

            if (seconds === 59) {
                if (minutes === 59) {
                    hours++;
                    minutes = 0;
                } else {
                    minutes++;
                }
                seconds = 0;
            } else {
                seconds++;
            }

            return { hours, minutes, seconds };
        });
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(updateTime, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    // Função para iniciar o temporizador
    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    // Função para pausar o temporizador
    const pauseTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    // Função para resetar o temporizador
    const resetTimer = () => {
        pauseTimer();
        setTime({ hours: 0, minutes: 0, seconds: 0 });
    };

    return (
        <div className='container'>
            <h1>Temporizador</h1>
            <div className="timer">
                {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
            </div>
            <div className="button-group">
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    );
};

export default Timer;
