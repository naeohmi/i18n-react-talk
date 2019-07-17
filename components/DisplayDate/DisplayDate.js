//https://github.com/formatjs/react-intl/blob/master/docs/API.md#injectintl-hoc
import React from "react";
import { injectIntl, FormattedRelative } from "react-intl";

const DisplayDate = injectIntl(({ date, intl }) => {
  return (
    <div>
      <p>{intl.formatDate(date)}</p>
      <p>
        <FormattedRelative value={date} />
      </p>
    </div>
  );
});

export default DisplayDate;
