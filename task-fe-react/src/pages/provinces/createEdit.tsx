import axios from "axios";
import React from "react";

interface State {
  name: string;
  data: {
    id: number;
    name: string;
  };
  updated: boolean;
}

class ProvinciesCreateEdit extends React.Component<{ data?: { id: number; name: string }; getMessage: (string: string) => void; onSuccessfulSubmit: () => void }, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        id: props.data?.id || 0,
        name: props.data?.name || "",
      },
      name: props.data.name || "",
      updated: props.data.id !== 0 ? true : false
    };
  }

  submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state)
    if (this.state.updated) {
      axios.patch(`http://localhost:5000/api/v1/provinces/${this.state.data.id}`, {
        name: this.state.name
      }).then((res) => {
        this.props.onSuccessfulSubmit();
        this.props.getMessage(res.data.message);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      axios.post("http://localhost:5000/api/v1/provinces", {
        name: this.state.name
      }).then((res) => {
        this.props.onSuccessfulSubmit();
        this.props.getMessage(res.data.message);
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  
  render() {
    return (
      <div>
        <h1 className="text-lg mb-4 font-bold">Data Province</h1>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="name">name</label>
            <input type="text" id="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProvinciesCreateEdit;
