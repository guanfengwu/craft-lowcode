/*
 * @Author: WGF
 * @Date: 2024-01-04 09:41:01
 * @LastEditors: WGF
 * @LastEditTime: 2024-01-04 10:23:45
 * @Description:
 * @FilePath: /landing/pages/view.tsx
 */
import { Editor, Frame } from "@craftjs/core";
import React from "react";

import { Viewport } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Custom1, OnlyButtons } from "../components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "../components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "../components/selectors/Custom3";
import { Video } from "../components/selectors/Video";
import json from "../asset/init.json";

function View() {
  return (
    <div>
      <Editor
        resolver={{
          Container,
          Text,
          Custom1,
          Custom2,
          Custom2VideoDrop,
          Custom3,
          Custom3BtnDrop,
          OnlyButtons,
          Button,
          Video,
        }}
        enabled={false}
      >
         <Frame json={JSON.stringify(json)}></Frame>
      </Editor>
    </div>
  );
}

export default View;
