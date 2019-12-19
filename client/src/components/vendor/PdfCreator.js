import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

class PdfCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.createAndDownloadPdf();
  }

  //handleChange = ({target: {value, name}}) => this.setState({[name]: value})

  createAndDownloadPdf = () => {
    this.props.pdfGenerated();
    axios
      .post(`${process.env.REACT_APP_URL_API}create-pdf`, this.state)
      .then(() =>
        axios.get(
          `${process.env.REACT_APP_URL_API}fetch-pdf/${this.props.email}`,
          { responseType: "blob" }
        )
      )
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    return <></>;
  }
}

export default PdfCreator;
