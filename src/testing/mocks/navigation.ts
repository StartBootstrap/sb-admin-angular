import { SideNavItem } from '@modules/navigation/models';
export { SideNavItem };

export class MockSideNavItem implements SideNavItem {
    text = 'TEST';
    link = 'TEST';
}
