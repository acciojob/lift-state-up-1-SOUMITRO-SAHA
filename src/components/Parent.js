import React, { useState } from "react";

const Parent = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<h1>Parent Component</h1>
			<h3>Child Component</h3>
			<button onClick={() => setShowModal((prev) => !prev)}>Show MOdal</button>
			{showModal && (
				<div>
					<h3>Modal Content</h3>
					<p>This is the modal content.</p>
				</div>
			)}
		</div>
	);
};

export default Parent;
