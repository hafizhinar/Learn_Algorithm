const { Queue } = require('./Queue');
const { Stack } = require('./Stack');


let graph;
let visit;
let stack;


const InitializeGraph= (maxVertical) => {

    visit = new Array(maxVertical);
    stack = new Stack();

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

const dfs = (node) => {

    stack.push(node);

    while (!stack.isEmpty()) {

        node = stack.pop();
       
        if (visit[node] == false) {
            visit[node] = true;

            // let datapush = []
            // datapush.push(node);
            console.log(node)
        //    console.log(`we visited ${node}`)
            for (let j = 0; j < graph[node].length; j++) {
                if (graph[node][j] === 1){
                    stack.push(j);
                }

            }
        }

    }

}


InitializeGraph(5);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(0, 3);
insertGraph(1, 4);

dfs(3);
