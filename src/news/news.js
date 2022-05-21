import "./news.css"
import axios from "axios";
import {useEffect, useState} from "react"
import { Table } from "react-bootstrap";

function Aritcli (){
    const API_KEY = 'bfdc31721454377b6478aff801ffce22199acfb297c339631de4505f2dd00e2e';
    const leagueId="207";    
    const [tm , setTeam]= useState([]); //hedhi chnia ? mafhémtéch chnia nista3mlha ,? 
    function display(){
        axios.get(`https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${leagueId}&APIkey=${API_KEY}`).then((res)=>{
            setTeam(res.data.result.total) 
            // console.log("dazdazda",res.data.result.total)
    })}
useEffect(()=>{
    display()           // activite the function direct , without calling it in button or anything , invoke the function from begining
},[tm])

    return (
        <div> <Table> 
        <thead>
            <tr>
            <th>Ranking</th>
            <th>Team</th>
            <th>Played</th>
            <th>Win</th>
            <th>Drow</th>
            <th>Lose</th>
            <th>Points </th>

            </tr>
        </thead>
        </Table>
            {tm.map((e)=>{
                return <div> 
                   <Table>
              <tbody>
                <tr>
                  <td>{e?.standing_place}</td> 
                  <td>{e?.standing_team} </td>
                  <td>{e?.standing_P}</td>
                  <td>{e?.standing_W}</td>
                  <td>{e?.standing_D}</td>
                  <td>{e?.standing_L}</td>
                  <td>{e?.standing_PTS}</td>

                </tr>
                </tbody>
                </Table>
                </div>
            })}
                                {/* <h1> {tm[0]?.standing_team}</h1> 
                                <div  >{tm[0]?.standing_place}</div> */}
                               
        </div>
    )
}

export default Aritcli












