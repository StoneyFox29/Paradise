import {
  Button,
  Section,
  Stack,
  } from 'tgui-core/components';

import { Window } from '../layouts';
import { useBackend } from '../backend';

type Perf = {
  name: string;
  category: number;
  description: string;
};

type Perfs = {
  perfs: Perf[];
};

export const GeneralPreferences = (properties) => {
  const { act, data } = useBackend<Perfs>();


  return (
    <Window width={800} height={600}>
      <Window.Content scrollable>
        <Stack>
          <Section>
            <Stack>
              <Stack.Item>
                <Button content="Undo" onClick={() => act('undo')} />
              </Stack.Item>
              <Stack.Item>
                <Button content="Save Setup" onClick={() => act('save')} />
              </Stack.Item>
              <Stack.Item>
                <Button content="Reset Setup" onClick={() => act('reset')} />
              </Stack.Item>
            </Stack>
          </Section>
        </Stack>
      </Window.Content>
    </Window>
  );
};
