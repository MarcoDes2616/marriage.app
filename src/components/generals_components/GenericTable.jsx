import { Button, Card, CardHeader, Col, Row, Table } from "reactstrap";
import ContainerStyled from "./generals/ContainerStyled";
import TextStyled from "./generals/TextStyled";
import { useState } from "react";
import { publish } from "../events/events";

const GenericTable = ({
  data,
  columns,
  tableName,
  title,
  buttonAction,
  search,
}) => {

  const [searchText, setSearchText] = useState()

  const renderRow = (data) => {
    return data.map((item, index) => (
      <tr key={index}>
        {columns.map((column, index) => {
          if (column.dataField === "actions") {
            return <td key={index}>{column.function(item)}</td>;
          } else {
            let col = column.dataField;
            if (column.formatter) {
              if (col.includes(".")) {
                let cols = col.split(".");
                return (
                  <td key={index}>
                    {column.formatter(item[cols[0]][cols[1]])}
                  </td>
                );
              }
              return <td key={index}>{column.formatter(item[col])}</td>;
            } else {
              if (col.includes(".")) {
                let cols = col.split(".");
                return <td key={index}>{item[cols[0]]?.[cols[1]]}</td>;
              }
              return <td key={index}>{item[col]}</td>;
            }
          }
        })}
      </tr>
    ));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    publish("search", {tableName, searchText})
  }


  return (
    <ContainerStyled addClass={"flex column al-c lg"}>
      <Col className="search_datatable">
        {search && (
          <form action="">
            <label>
              {" "}
              
              <input
                type="text"
                className="form-control-sm input-search border-search"
                placeholder="Nombre o documento"
                value={searchText}
                onChange={handleChange}
              />
              {searchText?.length > 0 && (
                <i 
                  className="bx bx-x clear-search btn_app" 
                  onClick={() => setSearchText("")}
                  />
              )}
            </label>
            <button type="submit" onClick={handleSearch}>
              Buscar
            </button>
          </form>
        )}
      </Col>
      <Card className="my-2 full-width" md={12}>
        <CardHeader>
          <Row className="d-flex al-c">
            <Col xs={9} md={10}>
              <TextStyled weight={"bold"}>{title}</TextStyled>
            </Col>
            <Col md={2} xs={3} className=" flex jf-c">
              {buttonAction && (
                <Button onClick={() => buttonAction(true)}>Registrar</Button>
              )}
            </Col>
          </Row>
        </CardHeader>
        <Table hover>
          <thead>
            <tr>
              {columns.map((item, index) => (
                <th key={index}>{item.fieldName}</th>
              ))}
            </tr>
          </thead>
          {data && <tbody>{renderRow(data)}</tbody>}
        </Table>
      </Card>
    </ContainerStyled>
  );
};

export default GenericTable;
