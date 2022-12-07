import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<div className="loading">
			<div className="header">
				<Skeleton
					sx={{ bgcolor: "grey.900" }}
					width={250}
					height={50}
					variant="rounded"
				/>
				<Skeleton
					sx={{ bgcolor: "grey.900" }}
					width={200}
					height={50}
					variant="rounded"
				/>
			</div>
			<div className="tale">
				<Skeleton
					sx={{ bgcolor: "grey.900" }}
					width={800}
					height={700}
					variant="rounded"
				/>
			</div>
			<div className="pagination">
				<Skeleton
					sx={{ bgcolor: "grey.900" }}
					width={400}
					height={50}
					variant="rounded"
				/>
			</div>
		</div>
	);
};

export default Loading;
