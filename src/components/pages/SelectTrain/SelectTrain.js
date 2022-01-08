import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";

import StatusSteps from "../../molecules/StatusSteps/StatusSteps";

function SelectTrain() {
  return (
    <PageTemplate selectTrain>
      <StatusSteps step={4} />
    </PageTemplate>
  );
}

export default SelectTrain;
