import React from "react";
import { Table } from "reactstrap";

export default class TableResponsive extends React.Component {
  render() {
    return (
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID String</th>
            <th>Título</th>
            <th>Protocolo</th>
            <th>Status</th>
            <th>Taxa</th>
            <th>Carregando</th>
            <th>Última Conexão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">981</th>
            <td>ENEL34</td> {/*ID String */}
            <td>Table cell</td> {/*Titulo */}
            <td>Table cell</td> {/*Protocolo */}
            <td>Table cell</td> {/*Status */}
            <td>Table cell</td> {/*Taxa */}
            <td>Table cell</td> {/*Carregando */}
            <td>Table cell</td> {/*Ultima conexao */}
            <td>Table cell</td> {/*Açoes */}
          </tr>
          <tr>
            <th scope="row">960</th>
            <td>ENEL20</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">60</th>
            <td>ENEL33</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">531</th>
            <td>ENEL32</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">912</th>
            <td>ENEL12</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">981</th>
            <td>ENEL17</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">653</th>
            <td>ENEL18</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">391</th>
            <td>ENEL19</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">341</th>
            <td>ENEL24</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">300</th>
            <td>ENEL10</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">325</th>
            <td>ENEL11</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
