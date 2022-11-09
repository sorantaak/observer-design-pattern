import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import observable from "./patterns/observable";
import Counter from "./components/counter";

function logger(data) {
	console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
	toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);
function App() {
	return (
		<div className="App">
			<Counter />
			<ToastContainer closeButton={true} position="bottom-right" />
		</div>
	);
}

export default App;
