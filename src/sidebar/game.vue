<template>
    <h1 class="font-bold">Play Tik-Tac</h1>
    <h1 class="mb:-5 uppercase font-bold text-5xl"  v-if="winner">player{{ winner }}is Winner</h1>
    <h1 class="mb:-5 uppercase font-bold text-5xl" v-else="player">player{{ player }} Turn</h1>
    <div v-for="(row,x) in board" class="flex">
        <div v-for="(cell,y) in row" class="border h-32 w-32 flex justify-center items-center" @click="makeMove(x,y)">
       <h1 class="text-5xl font-bold uppercase">{{ cell }}</h1>
        </div>
    </div>
    <button @click="resetGame" class="px-6 py-2 bg-amber-300 rounded mt-5">Restart game</button>
</template>
<script setup>
import{computed, ref} from'vue';

const player=ref("x");
const board=ref([
    ["","",""],
    ["","",""],
    ["","",""],
]);
function checkWinner(board)
{
    const winline=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,5,6],
    ];
    for(var i=0;i<winline.length;i++)
{
    const[a,b,c]=winline[i];
    if(board[a] && board[a]==board[b] && board[a]==board[c])
{
    return board[a];
}
}
return null
}
const winner=computed(()=>checkWinner(board.value.flat()));
function makeMove(x,y)
{
    if(board.value[x][y])
    {
        window.alert("alredy played here!");
        return;
    }
    if(winner.value)
    {
        window.alert("winner found,no player left");
        return;
    }
    board.value[x][y]=player.value;
    player.value=="x" ?(player.value="y") :(player.value="x");
}
function resetGame()
     {
       player.value="x";
       board.value=[
        ["","",""],
        ["","",""],
        ["","",""],
       ] 
        
    };
</script>