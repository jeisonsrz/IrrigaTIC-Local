import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Monitoreo de Modulos IrrigaTIC</h4> */}
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          {/* </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Modulo", "Ciudad", "Departamento", "Costo Monitoreo"]}
              tableData={[
                ["Modulo1", "Colombia", "Cauca(Cajibio)", "$36,738"],
                ["Modulo2", "Colombia", "Cauca(Tambo)", "$23,789"],
                ["Modulo3", "Colombia", "Cauca(Suarez)", "$56,142"],
                ["Modulo4", "Colombia", "Cauca(Paez)", "$38,735"],
                ["Modulo5", "Colombia", "Cauca(Rosas)", "$63,542"],
                ["Modulo6", "Colombia", "Cauca(Patia)", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
            Monitoreo de Modulos IrrigaTIC
            </h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Modulo", "País", "Departamento", "Costo Monitoreo"]}
              tableData={[
                ["Modulo1", "Colombia", "Cauca(Cajibio)", "$36,738"],
                ["Modulo2", "Colombia", "Cauca(Tambo)", "$23,789"],
                ["Modulo3", "Colombia", "Cauca(Suarez)", "$56,142"],
                ["Modulo4", "Colombia", "Cauca(Paez)", "$38,735"],
                ["Modulo5", "Colombia", "Cauca(Rosas)", "$63,542"],
                ["Modulo6", "Colombia", "Cauca(Patia)", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
