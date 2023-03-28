import React from "react";
import {useTranslation} from "react-i18next";
import { TimeTableRow } from "../../index";
import {edrImagesMap} from "../../../config";
import { dispatchDirections } from "../../../config/stations";

type Props = {
    ttRow: TimeTableRow;
}
export const CellLineData: React.FC<Props> = ({ttRow}) => {
    const {t} = useTranslation();
    const directions = dispatchDirections[parseInt(ttRow.pointId)];
    const isHeadingLeft = directions?.left?.includes(parseInt(ttRow.toPostId));
    const isHeadingRight = directions?.right?.includes(parseInt(ttRow.toPostId));
    const isHeadingUp = directions?.up?.includes(parseInt(ttRow.toPostId));
    const isHeadingDown = directions?.down?.includes(parseInt(ttRow.toPostId));

    return <>
        <span className="pr-2">
        { isHeadingLeft && <span className="font-bold text-orange-400">【🢀】</span>}
        { isHeadingRight && <span className="font-bold text-teal-400">【🢂】</span>}
        { isHeadingUp && <span className="font-bold text-green-400">【🢁】</span>}
        { isHeadingDown && <span className="font-bold text-purple-400">【🢃】</span>}
        </span>
        {ttRow.toPost}
        <img className="inline-block pl-1 pb-1" src={edrImagesMap.RIGHT_ARROW} height={18} width={18} alt="r_arrow"/>️
        <b><span className="hidden lg:inline">{t("EDR_TRAINROW_line")}:&nbsp;</span>{ttRow.line}</b>
    </>
}
