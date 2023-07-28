import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<h1>Parent Component</h1>
			<Child setShowModal={setShowModal} showModal={showModal} />
		</div>
	);
};

export default Parent;
