import React from "react";

const Child = ({ showModal, setShowModal }) => {
	return (
		<div>
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

export default Child;
