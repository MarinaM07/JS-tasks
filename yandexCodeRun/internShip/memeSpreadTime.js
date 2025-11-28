/* Распространение мема в социальной сети

    Ограничение времени	1 секунда
    Ограничение памяти	64 Мб
    Ввод	input.json
    Вывод	output.json

    Условие

    В социальной сети пользователи могут быть друзьями друг с другом. Если один пользователь публикует мем, то все его друзья увидят
    этот мем через некоторое время. Дружба всегда взаимная — если пользователь A дружит с B, то B автоматически дружит с A. Некоторые
    пользователи первыми получили новый мем, и теперь он распространяется по сети с условиями: если пользователь увидел мем, он сразу
    отправляет его всем своим друзьям на передачу мема между пользователями уходит определённое время (зависит от задержки между ними).
    Необходимо найти минимальное время, за которое мем дойдёт до целевого пользователя. Если мем не доходит — вернуть -1.

    Входные данные

    Список дружеских связей в формате: [ [пользователь1, пользователь2, время_передачи], ... ] (время передачи всегда положительное).
    Список пользователей, которые первыми опубликовали мем (стартовые пользователи).
    Пользователь, до которого нужно определить время (целевой пользователь).

    Шаблон решения

    module.exports = function memeSpreadTime(subscriptions, starters, target) {
        // ваш код
    }

    Пример:

    Ввод
    subscriptions = [ [1, 2, 2], [2, 3, 3], [3, 4, 1], [4, 3, 1], [1, 4, 8] ]
    starters = [1, 4]
    target = 3
    Вывод
    1

    Объяснение

    Мем из 4 доходит до 3 за 1 (по связи 4 ↔︎ 3).
    Мем из 1 идёт дольше: 1 → 2 → 3 (время = 2 + 3 = 5).

    Ответ
    Язык (make) Node.js 20.14.0 + Chrome 125 
*/

export function memeSpreadTime(subscriptions, starters, target) {
    let maxID = 0;
    subscriptions.forEach(([a, b]) => {
        maxID = Math.max(maxID, a, b);
    });
    maxID = Math.max(maxID, ...starters, target);
    
    const V = maxID + 1;
    const INF = Number.MAX_SAFE_INTEGER;
    
    const dist = Array.from({ length: V }, () => Array(V).fill(INF));
    for (let i = 0; i < V; i++) {
        dist[i][i] = 0;
    }
    
    subscriptions.forEach(([a, b, time]) => {
        dist[a][b] = time;
        dist[b][a] = time;
    });
    
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] !== INF && dist[k][j] !== INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    
    let minTime = INF;
    starters.forEach(s => {
        if (dist[s][target] !== INF) {
            minTime = Math.min(minTime, dist[s][target]);
        }
    });
    
    return minTime === INF ? -1 : minTime;
}

/* Это задача на графах. Пользователи — вершины графа. Дружеские связи — ребра с весом (временем передачи). Поскольку дружба взаимная,
    граф неориентированный. Мем распространяется по кратчайшим путям (в терминах времени).    

    1. Определение размера графа (числа вершин V)

        let maxID = 0;
        subscriptions.forEach(([a, b]) => {
            maxID = Math.max(maxID, a, b);
        });
        maxID = Math.max(maxID, ...starters, target);

        const V = maxID + 1;
    
    2. Инициализация матрицы расстояний (dist)
    
        const INF = Number.MAX_SAFE_INTEGER;

        const dist = Array.from({ length: V }, () => Array(V).fill(INF));
        for (let i = 0; i < V; i++) {
            dist[i][i] = 0;
        }

        Матрица dist (5x5):
        i \ j	0	1	2	3	4
            0	0	∞	∞	∞	∞    Диагональ (i == j): 0 (расстояние до себя).
            1	∞	0	∞	∞	∞    Всё остальное: ∞ (нет путей).
            2	∞	∞	0	∞	∞    На следующем шаге (3) она заполнится ребрами из subscriptions: например, dist[1][2] = 2,
            3	∞	∞	∞	0	∞    dist[3][4] = 1 и т.д.
            4	∞	∞	∞	∞	0

    3. Заполнение матрицы из subscriptions

        subscriptions.forEach(([a, b, time]) => {
            dist[a][b] = time;
            dist[b][a] = time;
        });

        i \ j	0	1	2	3	4
            0	0	∞	∞	∞	∞    
            1	∞	0	2	∞	8    
            2	∞	2	0	3	∞    
            3	∞	∞	3	0	1    
            4	∞	8	∞	1	0

    4. Вычисление кратчайших путей

        for (let k = 0; k < V; k++) {
            for (let i = 0; i < V; i++) {
                for (let j = 0; j < V; j++) {
                     if (dist[i][k] !== INF && dist[k][j] !== INF) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                     }
                }
            }
        }
        
        Матрица после каждого k:

            После k=0                            После k=2                             После k=3                              После k=4  

            Матрица:                             Матрица:                              Матрица:                               Матрица:

            i \ j	0	1	2	3	4            i \ j	0	1	2	3	4              i \ j	0	1	2	3	4             i \ j	0	1	2	3	4
                0	0	∞	∞	∞	∞                0	0	∞	∞	∞	∞                  0	0	∞	∞	∞	∞                   0	0	∞	∞	∞	∞
                1	∞	0	2	∞	8                1	∞	0	2	5	8                  1	∞	0	2	5	6                   1	∞	0	2	5	6
                2	∞	2	0	3	10               2	∞	2	0	3	10                 2	∞	2	0	3	4                   2	∞	2	0	3	4
                3	∞	∞	3	0	1                3	∞	5	3	0	1                  3	∞	5	3	0	1                   3	∞	5	3	0	1  
                4	∞	8	10	1	0                4	∞	8	10	1	0                  4	∞	6	4	1	0                   4	∞	6	4	1	0
                
        Теперь в матрице все кратчайшие пути.

    5. Нахождение минимального времени до target

        let minTime = INF;
        starters.forEach(s => {
            if (dist[s][target] !== INF) {
                minTime = Math.min(minTime, dist[s][target]);
            }
        });

        return minTime === INF ? -1 : minTime;  
    
        - для каждого starter (1 и 4) берём dist[s][3] (target=3). Для 1: 5, для 4: 1. Минимум = 1. Возвращаем 1.
        - если бы все были INF, вернули -1.
*/
