const { Queue } = require('./Queue');
const { Stack } = require('./Stack');


let graph;
let visit;
let queue;


const InitializeGraph= (maxVertical) => {

    visit = new Array(maxVertical);
    queue = new Queue();

    for(let i = 0; i < visit.length; i++){
        visit[i] = false;
    }

    graph = new Array(maxVertical);
    for(let i = 0; i < graph.length; i++){
        graph[i] = new Array(maxVertical);
    }

    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j< graph[i].length; j++){
            graph[i][j] = 0;
        }
    }
}

const printGraph = () => {
    let graphLine = " ";
    let i, j;

    for(i = 0; i < graph.length; i++){
        for(j = 0; j < graph[i].length; j++){
            graphLine += graph[i][j];
            graphLine += " ";

            if(j == graph.length - 1){
                console.log(graphLine);
                graphLine = ' ';
            }

        }
    }
}

const insertGraph = (a, b) => {
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph[i].length; j++){
            if(i === a && j === b ){
                graph[i][j] = 1;
                graph[j][i] = 1;
            }
        }
    }
}

const bfs = (node) => {

    visit[node] = true;
    queue.equeue(node);

    while(!queue.isEmpty()){
        let visitNode = queue.dequeue();

        // console.log(`visiting node ${visitNode}`);
        console.log(visitNode);
        // let queuepush = []
        // queuepush.push(visitNode)
        for(let j = 0; j < graph[visitNode].length; j++){
            if(graph[visitNode][j] === 1 && visit[j] === false){
                visit[j] = true;
                queue.equeue(j);
            }
            // console.log(queue);
        }
    }
}


InitializeGraph(5);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(0, 3);
insertGraph(1, 4);

bfs(3);

