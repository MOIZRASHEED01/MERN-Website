import { Button, Table, TableHead, TableRow, TableCell, TableBody, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { categories } from "../../constants/data";
import { Link } from "@mui/material";

const useStyle = makeStyles({
  table: {
    border: "1px solid rgba(224, 224, 224, 1)",
  },
  write: {
    margin: 20,
    marginTop: "50",
    width: "85%",
    background: "#6495ED",
    color: "#fff",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = ({ match }) => {
  const classes = useStyle();
  return (
    <>
      <Link href={`/create`} style={{ textDecoration: "none" }}>
        <Button variant="contained" className={classes.write}>
          Create Blog
        </Button>
      </Link>

      <Table className={classes.table}>
        <TableHead>
          <TableCell>
            <Link href={"/"} className={classes.link}>
              All Categories
            </Link>
          </TableCell>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>
                <Link href={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
