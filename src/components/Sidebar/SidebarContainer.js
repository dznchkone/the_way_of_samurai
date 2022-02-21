import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapSateToProps = (state) => {
  return {
      state: state.sidebar
  }
}

const SidebarContainer = connect(mapSateToProps)(Sidebar);


export default SidebarContainer;