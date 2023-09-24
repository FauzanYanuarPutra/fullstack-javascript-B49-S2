import axios from "axios";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProvinciesCreateEdit from "./createEdit";

interface Province {
  id: number;
  name: string;
}

interface State {
  province: Province[];
  showCreate: boolean;
  message: string;
  updated: boolean;
  data: {
    id: number;
    name: string;
  };
  confirm: boolean;
  deleteId: number | null; 
}

class Provincies extends React.Component<{}, State, Province> {
  constructor(props: any) {
    super(props);
    this.state = {
      province: [],
      showCreate: false,
      message: "",
      updated: false,
      data: {
        id: 0,
        name: "",
      },
      confirm: false,
      deleteId: null,
    };
  }

  message = (message: string) => {
    this.setState({ message, updated: true }, () => {
      setTimeout(() => {
        this.setState({ message: "", updated: false });
      }, 4000);
    });
  }

  redirectToProvinces = () => {
    this.setState({ showCreate: false });
    this.fetchProvinceData();
    this.message(this.state.message);
  }

  getMessage = (msg: string) => {
    this.setState({ message: msg });
  }

  componentDidMount(): void {
    this.fetchProvinceData();
  }

  componentDidUpdate(prevState: State): void {
    if (this.state.updated !== prevState.updated && this.state.message && !this.state.updated) {
      this.fetchProvinceData();
      this.setState({ updated: true });
    }
  }

  deleteData = () => {
    const idToDelete = this.state.deleteId;
    if (idToDelete) {
      axios.delete(`http://localhost:5000/api/v1/provinces/${idToDelete}`).then((res) => {
        this.fetchProvinceData();
        this.setState({ updated: true, message: res.data.message });
        this.message(res.data.message);
        this.setState({ confirm: false, deleteId: null });
      });
    }
  }

  fetchProvinceData = () => {
    axios.get("http://localhost:5000/api/v1/provinces")
      .then((res) => {
        if (!res.data || !res.data.data) {
          return this.setState({ province: [] });
        }
        const province = res.data.data.map((prov: any) => prov);
        this.setState({ province: province });
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          this.setState({ province: [] });
        } else {
          console.log('error', error);
        }
      });
  }

  HandleForm = (props?: any) => {
    if (props) {
      this.setState({ showCreate: !this.state.showCreate });
      this.setState({ data: props });
    } else {
      this.setState({ showCreate: !this.state.showCreate, data: { id: 0, name: '' } });
    }
  }

  render() {
    return (
      <div>
        <div className="flex items-end justify-between">
          {this.state.message ? <div className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 inline-block">{this.state.message}</div> : null}
          <h1 className="text-2xl font-semibold mb-4">Data Province</h1>
          <div className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 inline-block" onClick={() => this.HandleForm()}>Create</div>

          <AnimatePresence>
            {this.state.showCreate && (
              <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#0000006d] flex justify-center items-center" onClick={() => this.setState({ showCreate: false })}>
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white px-10 py-5 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProvinciesCreateEdit data={this.state.data}  getMessage={this.getMessage} onSuccessfulSubmit={this.redirectToProvinces} />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
        <div className="overflow-x-auto">
          {this.state.province.length === 0 ? (
            <p>Data tidak ada.</p>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 p-2 w-[100px]">ID</th>
                  <th className="border-b-2 p-2 text-start">Name</th>
                  <th className="border-b-2 p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.province.map((prov: any) => (
                  <tr key={prov.id}>
                    <td className="border-b p-2 text-center">{prov.id}</td>
                    <td className="border-b p-2">{prov.name}</td>
                    <td className="border-b p-2 text-center">
                      <div className="flex justify-center items-center gap-4">
                        <div className="px-5 py-1 bg-blue-700 text-white rounded-lg" onClick={() => this.HandleForm(prov)}>Edit</div>
                        <div className="px-5 py-1 bg-red-700 text-white rounded-lg" onClick={() => this.setState({ confirm: true, deleteId: prov.id })}>Delete</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {this.state.confirm && (
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#0000006d] flex justify-center items-center">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white px-10 py-5 rounded-lg"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              <p>Are you sure you want to delete this data?</p>
              <div className="flex justify-center mt-4">
                <button className="bg-red-700 text-white px-4 py-2 rounded-lg mr-2" onClick={() => this.deleteData()}>Yes</button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={() => this.setState({ confirm: false, deleteId: null })}>No</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    );
  }
}

export default Provincies;
