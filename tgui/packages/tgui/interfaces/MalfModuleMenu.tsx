import { useState } from 'react';
import {
  Box,
  Button,
  Section,
  Stack,
  Table,
  Tabs,
  Tooltip,
  LabeledList,
} from 'tgui-core/components';

import { useBackend } from '../backend';
import { Window } from '../layouts';

type module = {
  name: string;
  cost: number;
  desc: string;
  disabled: Boolean;
  finished: Boolean;
  ascension: Boolean;
}

type modules = {
  modules: module[];
  processors: number;
}
export const MalfModuleMenu = (props) => {
  const { act, data } = useBackend<modules>();
  const { modules, processors } = data;


  return (
    <Window width={640} height={480}>
      <Window.Content scrollable>
        <Section title="Malf Module Menu">
          <LabeledList>
            <LabeledList.Item label="Available procesing power" />
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
