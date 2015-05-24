<?php
/**
 * Hooks_checkall
 * Add check all function to CP
 *
 * @author     Rudy Affandi <rudy@adnetinc.com>
 * @copyright  2015
 * @link       https://github.com/lesaff
 * @license    http://opensource.org/licenses/MIT
 *
 * Versions
 * 1.0.0       Initial release
 */

class Hooks_checkall extends Hooks 
{
    public function control_panel__add_to_foot()
    {
        return $this->js->link('checkall');
    }
}