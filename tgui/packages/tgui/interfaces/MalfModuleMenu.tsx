import { useState } from 'react';
import {
  Box,
  Button,
  Dropdown,
  Icon,
  LabeledList,
  Section,
  Stack,
  Table,
  Tabs,
  TextArea,
  ImageButton,
} from 'tgui-core/components';

import { useBackend } from '../backend';
import { Window } from '../layouts';
import { L } from 'vitest/dist/chunks/reporters.d.BuRON0I0.js';

type ModuleInfo = {
  name: string;
  description: string;
  cost: number;
  uid: string;
  icon_state: string;
};

type MalfModule = {
  modules: ModuleInfo[];
  power: number;
};

export const MalfModuleMenu = (properties) => {
  const { act, data } = useBackend<MalfModule>();
  const { modules, power } = data;

  return(
    <Window width={800} height={550}>
      <Window.Content scrollable>
        <Stack fill vertical>
          <Section title="Malf Module Menu">
            <LabeledList>
              <LabeledList.Item label="Available processing power">{power}</LabeledList.Item>
            </LabeledList>
          </Section>
          <Section title="Modules">
            {modules.map((M) => (
              <Stack.Item key={M.uid}>
                <ImageButton
                  fluid
                  dmIcon={'icons/mob/actions/actions.dmi'}
                  dmIconState={M.icon_state}
                  disabled={M.cost > power}
                  title={M.name}
                  onClick={() => act('purchase', { uid: M.uid })}
                >
                  {M.description}
                </ImageButton>
              </Stack.Item>
              ))}
          </Section>
        </Stack>
      </Window.Content>
    </Window>
  );
};
